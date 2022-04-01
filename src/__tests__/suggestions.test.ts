import SuggestionPlugin from '../app/plugins/suggestions.plugin';
import { getContainerMock } from '../__mocks__';

describe('Suggestion Plugin Tests', () => {
  test('Replies with message embed', () => {
    const plugin = new SuggestionPlugin(getContainerMock());
    const message = getMessageMock();
    
    // Send message through plugin.
    plugin.execute(message, ['test', 'for', 'suggestions', 'plugin']);
    
    // Expect to send a message.
    expect(message.reply).toBeCalled();
  });
});